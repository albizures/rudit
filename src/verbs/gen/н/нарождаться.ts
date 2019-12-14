import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарождаться: PerfectVerb = {
  name: Word('нарождаться', 6),
  singular1stPerson: Word('нарождаюсь', 6),
  singular2ndPerson: Word('нарождаешься', 6),
  singular3rdPerson: Word('нарождается', 6),
  plural1stPerson: Word('нарождаемся', 6),
  plural2ndPerson: Word('нарождаетесь', 6),
  plural3rdPerson: Word('нарождаются', 6),
  masculinePast: Word('нарождался', 6),
  femininePast: Word('нарождалась', 6),
  neuterPast: Word('нарождалось', 6),
  pluralPast: Word('нарождались', 6),
  imperativeInformal: Word('нарождайся', 6),
  imperativeFormal: Word('нарождайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(нарождаться.name.text, нарождаться);

export { нарождаться };