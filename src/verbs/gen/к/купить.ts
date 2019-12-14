import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const купить: PerfectVerb = {
  name: Word('купить', 3),
  singular1stPerson: Word('куплю', 4),
  singular2ndPerson: Word('купишь', 1),
  singular3rdPerson: Word('купит', 1),
  plural1stPerson: Word('купим', 1),
  plural2ndPerson: Word('купите', 1),
  plural3rdPerson: Word('купят', 1),
  masculinePast: Word('купил', 3),
  femininePast: Word('купила', 3),
  neuterPast: Word('купило', 3),
  pluralPast: Word('купили', 3),
  imperativeInformal: Word('купи', 3),
  imperativeFormal: Word('купите', 3),
  imperfect: ['покупать'],
};

perfectVerbs.set(купить.name.text, купить);

export { купить };