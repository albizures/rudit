import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрываться: PerfectVerb = {
  name: Word('покрываться', 6),
  singular1stPerson: Word('покрываюсь', 6),
  singular2ndPerson: Word('покрываешься', 6),
  singular3rdPerson: Word('покрывается', 6),
  plural1stPerson: Word('покрываемся', 6),
  plural2ndPerson: Word('покрываетесь', 6),
  plural3rdPerson: Word('покрываются', 6),
  masculinePast: Word('покрывался', 6),
  femininePast: Word('покрывалась', 6),
  neuterPast: Word('покрывалось', 6),
  pluralPast: Word('покрывались', 6),
  imperativeInformal: Word('покрывайся', 6),
  imperativeFormal: Word('покрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(покрываться.name.text, покрываться);

export { покрываться };