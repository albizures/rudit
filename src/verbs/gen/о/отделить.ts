import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделить: PerfectVerb = {
  name: Word('отделить', 5),
  singular1stPerson: Word('отделю', 5),
  singular2ndPerson: Word('отделишь', 5),
  singular3rdPerson: Word('отделит', 5),
  plural1stPerson: Word('отделим', 5),
  plural2ndPerson: Word('отделите', 5),
  plural3rdPerson: Word('отделят', 5),
  masculinePast: Word('отделил', 5),
  femininePast: Word('отделила', 5),
  neuterPast: Word('отделило', 5),
  pluralPast: Word('отделили', 5),
  imperativeInformal: Word('отдели', 5),
  imperativeFormal: Word('отделите', 5),
  imperfect: ['отделять'],
};

perfectVerbs.set(отделить.name.text, отделить);

export { отделить };