import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресыщаться: PerfectVerb = {
  name: Word('пресыщаться', 6),
  singular1stPerson: Word('пресыщаюсь', 6),
  singular2ndPerson: Word('пресыщаешься', 6),
  singular3rdPerson: Word('пресыщается', 6),
  plural1stPerson: Word('пресыщаемся', 6),
  plural2ndPerson: Word('пресыщаетесь', 6),
  plural3rdPerson: Word('пресыщаются', 6),
  masculinePast: Word('пресыщался', 6),
  femininePast: Word('пресыщалась', 6),
  neuterPast: Word('пресыщалось', 6),
  pluralPast: Word('пресыщались', 6),
  imperativeInformal: Word('пресыщайся', 6),
  imperativeFormal: Word('пресыщайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пресыщаться.name.text, пресыщаться);

export { пресыщаться };