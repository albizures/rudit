import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откусить: PerfectVerb = {
  name: Word('откусить', 5),
  singular1stPerson: Word('откушу', 5),
  singular2ndPerson: Word('откусишь', 3),
  singular3rdPerson: Word('откусит', 3),
  plural1stPerson: Word('откусим', 3),
  plural2ndPerson: Word('откусите', 3),
  plural3rdPerson: Word('откусят', 3),
  masculinePast: Word('откусил', 5),
  femininePast: Word('откусила', 5),
  neuterPast: Word('откусило', 5),
  pluralPast: Word('откусили', 5),
  imperativeInformal: Word('откуси', 5),
  imperativeFormal: Word('откусите', 5),
  imperfect: [],
};

perfectVerbs.set(откусить.name.text, откусить);

export { откусить };