import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упариваться: PerfectVerb = {
  name: Word('упариваться', 2),
  singular1stPerson: Word('упариваюсь', 2),
  singular2ndPerson: Word('упариваешься', 2),
  singular3rdPerson: Word('упаривается', 2),
  plural1stPerson: Word('упариваемся', 2),
  plural2ndPerson: Word('упариваетесь', 2),
  plural3rdPerson: Word('упариваются', 2),
  masculinePast: Word('упаривался', 2),
  femininePast: Word('упаривалась', 2),
  neuterPast: Word('упаривалось', 2),
  pluralPast: Word('упаривались', 2),
  imperativeInformal: Word('упаривайся', 2),
  imperativeFormal: Word('упаривайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(упариваться.name.text, упариваться);

export { упариваться };