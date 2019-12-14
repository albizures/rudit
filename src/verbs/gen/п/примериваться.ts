import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примериваться: PerfectVerb = {
  name: Word('примериваться', 4),
  singular1stPerson: Word('примериваюсь', 4),
  singular2ndPerson: Word('примериваешься', 4),
  singular3rdPerson: Word('примеривается', 4),
  plural1stPerson: Word('примериваемся', 4),
  plural2ndPerson: Word('примериваетесь', 4),
  plural3rdPerson: Word('примериваются', 4),
  masculinePast: Word('примеривался', 4),
  femininePast: Word('примеривалась', 4),
  neuterPast: Word('примеривалось', 4),
  pluralPast: Word('примеривались', 4),
  imperativeInformal: Word('примеривайся', 4),
  imperativeFormal: Word('примеривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(примериваться.name.text, примериваться);

export { примериваться };