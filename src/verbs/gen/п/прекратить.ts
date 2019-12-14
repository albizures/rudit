import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прекратить: PerfectVerb = {
  name: Word('прекратить', 7),
  singular1stPerson: Word('прекращу', 7),
  singular2ndPerson: Word('прекратишь', 7),
  singular3rdPerson: Word('прекратит', 7),
  plural1stPerson: Word('прекратим', 7),
  plural2ndPerson: Word('прекратите', 7),
  plural3rdPerson: Word('прекратят', 7),
  masculinePast: Word('прекратил', 7),
  femininePast: Word('прекратила', 7),
  neuterPast: Word('прекратило', 7),
  pluralPast: Word('прекратили', 7),
  imperativeInformal: Word('прекрати', 7),
  imperativeFormal: Word('прекратите', 7),
  imperfect: [],
};

perfectVerbs.set(прекратить.name.text, прекратить);

export { прекратить };