import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спохватываться: PerfectVerb = {
  name: Word('спохватываться', 5),
  singular1stPerson: Word('спохватываюсь', 5),
  singular2ndPerson: Word('спохватываешься', 5),
  singular3rdPerson: Word('спохватывается', 5),
  plural1stPerson: Word('спохватываемся', 5),
  plural2ndPerson: Word('спохватываетесь', 5),
  plural3rdPerson: Word('спохватываются', 5),
  masculinePast: Word('спохватывался', 5),
  femininePast: Word('спохватывалась', 5),
  neuterPast: Word('спохватывалось', 5),
  pluralPast: Word('спохватывались', 5),
  imperativeInformal: Word('спохватывайся', 5),
  imperativeFormal: Word('спохватывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(спохватываться.name.text, спохватываться);

export { спохватываться };