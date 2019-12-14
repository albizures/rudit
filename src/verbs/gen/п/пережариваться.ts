import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережариваться: PerfectVerb = {
  name: Word('пережариваться', 5),
  singular1stPerson: Word('пережариваюсь', 5),
  singular2ndPerson: Word('пережариваешься', 5),
  singular3rdPerson: Word('пережаривается', 5),
  plural1stPerson: Word('пережариваемся', 5),
  plural2ndPerson: Word('пережариваетесь', 5),
  plural3rdPerson: Word('пережариваются', 5),
  masculinePast: Word('пережаривался', 5),
  femininePast: Word('пережаривалась', 5),
  neuterPast: Word('пережаривалось', 5),
  pluralPast: Word('пережаривались', 5),
  imperativeInformal: Word('пережаривайся', 5),
  imperativeFormal: Word('пережаривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(пережариваться.name.text, пережариваться);

export { пережариваться };