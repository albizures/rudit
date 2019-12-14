import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const препроводить: PerfectVerb = {
  name: Word('препроводить', 9),
  singular1stPerson: Word('препровожу', 9),
  singular2ndPerson: Word('препроводишь', 9),
  singular3rdPerson: Word('препроводит', 9),
  plural1stPerson: Word('препроводим', 9),
  plural2ndPerson: Word('препроводите', 9),
  plural3rdPerson: Word('препроводят', 9),
  masculinePast: Word('препроводил', 9),
  femininePast: Word('препроводила', 9),
  neuterPast: Word('препроводило', 9),
  pluralPast: Word('препроводили', 9),
  imperativeInformal: Word('препроводи', 9),
  imperativeFormal: Word('препроводите', 9),
  imperfect: [],
};

perfectVerbs.set(препроводить.name.text, препроводить);

export { препроводить };