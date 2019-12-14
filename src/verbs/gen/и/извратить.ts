import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извратить: PerfectVerb = {
  name: Word('извратить', 6),
  singular1stPerson: Word('изврачу', 6),
  singular2ndPerson: Word('извратишь', 6),
  singular3rdPerson: Word('извратит', 6),
  plural1stPerson: Word('извратим', 6),
  plural2ndPerson: Word('извратите', 6),
  plural3rdPerson: Word('извратят', 6),
  masculinePast: Word('извратил', 6),
  femininePast: Word('извратила', 6),
  neuterPast: Word('извратило', 6),
  pluralPast: Word('извратили', 6),
  imperativeInformal: Word('изврати', 6),
  imperativeFormal: Word('извратите', 6),
  imperfect: ['извращать'],
};

perfectVerbs.set(извратить.name.text, извратить);

export { извратить };