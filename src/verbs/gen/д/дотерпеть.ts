import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотерпеть: PerfectVerb = {
  name: Word('дотерпеть', 6),
  singular1stPerson: Word('дотерплю', 7),
  singular2ndPerson: Word('дотерпишь', 3),
  singular3rdPerson: Word('дотерпит', 3),
  plural1stPerson: Word('дотерпим', 3),
  plural2ndPerson: Word('дотерпите', 3),
  plural3rdPerson: Word('дотерпят', 3),
  masculinePast: Word('дотерпел', 6),
  femininePast: Word('дотерпела', 6),
  neuterPast: Word('дотерпело', 6),
  pluralPast: Word('дотерпели', 6),
  imperativeInformal: Word('дотерпи', 6),
  imperativeFormal: Word('дотерпите', 6),
  imperfect: [],
};

perfectVerbs.set(дотерпеть.name.text, дотерпеть);

export { дотерпеть };