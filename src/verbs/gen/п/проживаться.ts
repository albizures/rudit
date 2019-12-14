import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проживаться: PerfectVerb = {
  name: Word('проживаться', 6),
  singular1stPerson: Word('проживаюсь', 6),
  singular2ndPerson: Word('проживаешься', 6),
  singular3rdPerson: Word('проживается', 6),
  plural1stPerson: Word('проживаемся', 6),
  plural2ndPerson: Word('проживаетесь', 6),
  plural3rdPerson: Word('проживаются', 6),
  masculinePast: Word('проживался', 6),
  femininePast: Word('проживалась', 6),
  neuterPast: Word('проживалось', 6),
  pluralPast: Word('проживались', 6),
  imperativeInformal: Word('проживайся', 6),
  imperativeFormal: Word('проживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(проживаться.name.text, проживаться);

export { проживаться };