import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравновешиваться: PerfectVerb = {
  name: Word('уравновешиваться', 7),
  singular1stPerson: Word('уравновешиваюсь', 7),
  singular2ndPerson: Word('уравновешиваешься', 7),
  singular3rdPerson: Word('уравновешивается', 7),
  plural1stPerson: Word('уравновешиваемся', 7),
  plural2ndPerson: Word('уравновешиваетесь', 7),
  plural3rdPerson: Word('уравновешиваются', 7),
  masculinePast: Word('уравновешивался', 7),
  femininePast: Word('уравновешивалась', 7),
  neuterPast: Word('уравновешивалось', 7),
  pluralPast: Word('уравновешивались', 7),
  imperativeInformal: Word('уравновешивайся', 7),
  imperativeFormal: Word('уравновешивайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(уравновешиваться.name.text, уравновешиваться);

export { уравновешиваться };