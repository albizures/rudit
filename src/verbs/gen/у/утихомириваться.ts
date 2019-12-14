import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихомириваться: PerfectVerb = {
  name: Word('утихомириваться', 6),
  singular1stPerson: Word('утихомириваюсь', 6),
  singular2ndPerson: Word('утихомириваешься', 6),
  singular3rdPerson: Word('утихомиривается', 6),
  plural1stPerson: Word('утихомириваемся', 6),
  plural2ndPerson: Word('утихомириваетесь', 6),
  plural3rdPerson: Word('утихомириваются', 6),
  masculinePast: Word('утихомиривался', 6),
  femininePast: Word('утихомиривалась', 6),
  neuterPast: Word('утихомиривалось', 6),
  pluralPast: Word('утихомиривались', 6),
  imperativeInformal: Word('утихомиривайся', 6),
  imperativeFormal: Word('утихомиривайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(утихомириваться.name.text, утихомириваться);

export { утихомириваться };