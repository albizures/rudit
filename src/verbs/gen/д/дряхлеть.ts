import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дряхлеть: PerfectVerb = {
  name: Word('дряхлеть', 5),
  singular1stPerson: Word('дряхлею', 5),
  singular2ndPerson: Word('дряхлеешь', 5),
  singular3rdPerson: Word('дряхлеет', 5),
  plural1stPerson: Word('дряхлеем', 5),
  plural2ndPerson: Word('дряхлеете', 5),
  plural3rdPerson: Word('дряхлеют', 5),
  masculinePast: Word('дряхлел', 5),
  femininePast: Word('дряхлела', 5),
  neuterPast: Word('дряхлело', 5),
  pluralPast: Word('дряхлели', 5),
  imperativeInformal: Word('дряхлей', 5),
  imperativeFormal: Word('дряхлейте', 5),
  imperfect: [],
};

perfectVerbs.set(дряхлеть.name.text, дряхлеть);

export { дряхлеть };