import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плавить: PerfectVerb = {
  name: Word('плавить', 2),
  singular1stPerson: Word('плавлю', 2),
  singular2ndPerson: Word('плавишь', 2),
  singular3rdPerson: Word('плавит', 2),
  plural1stPerson: Word('плавим', 2),
  plural2ndPerson: Word('плавите', 2),
  plural3rdPerson: Word('плавят', 2),
  masculinePast: Word('плавил', 2),
  femininePast: Word('плавила', 2),
  neuterPast: Word('плавило', 2),
  pluralPast: Word('плавили', 2),
  imperativeInformal: Word('плавь', 2),
  imperativeFormal: Word('плавьте', 2),
  imperfect: [],
};

perfectVerbs.set(плавить.name.text, плавить);

export { плавить };