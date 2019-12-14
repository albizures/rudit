import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истерзаться: PerfectVerb = {
  name: Word('истерзаться', 6),
  singular1stPerson: Word('истерзаюсь', 6),
  singular2ndPerson: Word('истерзаешься', 6),
  singular3rdPerson: Word('истерзается', 6),
  plural1stPerson: Word('истерзаемся', 6),
  plural2ndPerson: Word('истерзаетесь', 6),
  plural3rdPerson: Word('истерзаются', 6),
  masculinePast: Word('истерзался', 6),
  femininePast: Word('истерзалась', 6),
  neuterPast: Word('истерзалось', 6),
  pluralPast: Word('истерзались', 6),
  imperativeInformal: Word('истерзайся', 6),
  imperativeFormal: Word('истерзайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(истерзаться.name.text, истерзаться);

export { истерзаться };