import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const светить: PerfectVerb = {
  name: Word('светить', 4),
  singular1stPerson: Word('свечу', 4),
  singular2ndPerson: Word('светишь', 2),
  singular3rdPerson: Word('светит', 2),
  plural1stPerson: Word('светим', 2),
  plural2ndPerson: Word('светите', 2),
  plural3rdPerson: Word('светят', 2),
  masculinePast: Word('светил', 4),
  femininePast: Word('светила', 4),
  neuterPast: Word('светило', 4),
  pluralPast: Word('светили', 4),
  imperativeInformal: Word('свети', 4),
  imperativeFormal: Word('светите', 4),
  imperfect: ['посветить','засветить'],
};

perfectVerbs.set(светить.name.text, светить);

export { светить };