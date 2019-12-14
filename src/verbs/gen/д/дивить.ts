import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дивить: PerfectVerb = {
  name: Word('дивить', 3),
  singular1stPerson: Word('дивлю', 4),
  singular2ndPerson: Word('дивишь', 3),
  singular3rdPerson: Word('дивит', 3),
  plural1stPerson: Word('дивим', 3),
  plural2ndPerson: Word('дивите', 3),
  plural3rdPerson: Word('дивят', 3),
  masculinePast: Word('дивил', 3),
  femininePast: Word('дивила', 3),
  neuterPast: Word('дивило', 3),
  pluralPast: Word('дивили', 3),
  imperativeInformal: Word('диви', 3),
  imperativeFormal: Word('дивите', 3),
  imperfect: [],
};

perfectVerbs.set(дивить.name.text, дивить);

export { дивить };