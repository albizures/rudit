import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стремить: PerfectVerb = {
  name: Word('стремить', 5),
  singular1stPerson: Word('стремлю', 6),
  singular2ndPerson: Word('стремишь', 5),
  singular3rdPerson: Word('стремит', 5),
  plural1stPerson: Word('стремим', 5),
  plural2ndPerson: Word('стремите', 5),
  plural3rdPerson: Word('стремят', 5),
  masculinePast: Word('стремил', 5),
  femininePast: Word('стремила', 5),
  neuterPast: Word('стремило', 5),
  pluralPast: Word('стремили', 5),
  imperativeInformal: Word('стреми', 5),
  imperativeFormal: Word('стремите', 5),
  imperfect: [],
};

perfectVerbs.set(стремить.name.text, стремить);

export { стремить };