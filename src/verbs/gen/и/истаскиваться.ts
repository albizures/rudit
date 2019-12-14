import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истаскиваться: PerfectVerb = {
  name: Word('истаскиваться', 3),
  singular1stPerson: Word('истаскиваюсь', 3),
  singular2ndPerson: Word('истаскиваешься', 3),
  singular3rdPerson: Word('истаскивается', 3),
  plural1stPerson: Word('истаскиваемся', 3),
  plural2ndPerson: Word('истаскиваетесь', 3),
  plural3rdPerson: Word('истаскиваются', 3),
  masculinePast: Word('истаскивался', 3),
  femininePast: Word('истаскивалась', 3),
  neuterPast: Word('истаскивалось', 3),
  pluralPast: Word('истаскивались', 3),
  imperativeInformal: Word('истаскивайся', 3),
  imperativeFormal: Word('истаскивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(истаскиваться.name.text, истаскиваться);

export { истаскиваться };