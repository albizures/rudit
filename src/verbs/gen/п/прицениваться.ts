import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицениваться: PerfectVerb = {
  name: Word('прицениваться', 4),
  singular1stPerson: Word('прицениваюсь', 4),
  singular2ndPerson: Word('прицениваешься', 4),
  singular3rdPerson: Word('приценивается', 4),
  plural1stPerson: Word('прицениваемся', 4),
  plural2ndPerson: Word('прицениваетесь', 4),
  plural3rdPerson: Word('прицениваются', 4),
  masculinePast: Word('приценивался', 4),
  femininePast: Word('приценивалась', 4),
  neuterPast: Word('приценивалось', 4),
  pluralPast: Word('приценивались', 4),
  imperativeInformal: Word('приценивайся', 4),
  imperativeFormal: Word('приценивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прицениваться.name.text, прицениваться);

export { прицениваться };