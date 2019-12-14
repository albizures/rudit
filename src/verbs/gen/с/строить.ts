import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const строить: PerfectVerb = {
  name: Word('строить', 4),
  singular1stPerson: Word('строю', 4),
  singular2ndPerson: Word('строишь', 4),
  singular3rdPerson: Word('строит', 4),
  plural1stPerson: Word('строим', 4),
  plural2ndPerson: Word('строите', 4),
  plural3rdPerson: Word('строят', 4),
  masculinePast: Word('строил', 4),
  femininePast: Word('строила', 4),
  neuterPast: Word('строило', 4),
  pluralPast: Word('строили', 4),
  imperativeInformal: Word('строи', 4),
  imperativeFormal: Word('строите', 4),
  imperfect: ['страивать'],
};

perfectVerbs.set(строить.name.text, строить);

export { строить };