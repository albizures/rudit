import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одряхлеть: PerfectVerb = {
  name: Word('одряхлеть', 6),
  singular1stPerson: Word('одряхлею', 6),
  singular2ndPerson: Word('одряхлеешь', 6),
  singular3rdPerson: Word('одряхлеет', 6),
  plural1stPerson: Word('одряхлеем', 6),
  plural2ndPerson: Word('одряхлеете', 6),
  plural3rdPerson: Word('одряхлеют', 6),
  masculinePast: Word('одряхлел', 6),
  femininePast: Word('одряхлела', 6),
  neuterPast: Word('одряхлело', 6),
  pluralPast: Word('одряхлели', 6),
  imperativeInformal: Word('одряхлей', 6),
  imperativeFormal: Word('одряхлейте', 6),
  imperfect: [],
};

perfectVerbs.set(одряхлеть.name.text, одряхлеть);

export { одряхлеть };