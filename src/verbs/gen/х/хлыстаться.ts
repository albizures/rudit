import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хлыстаться: PerfectVerb = {
  name: Word('хлыстаться', 5),
  singular1stPerson: Word('хлыщусь', 4),
  singular2ndPerson: Word('хлыщешься', 2),
  singular3rdPerson: Word('хлыщется', 2),
  plural1stPerson: Word('хлыщемся', 2),
  plural2ndPerson: Word('хлыщетесь', 2),
  plural3rdPerson: Word('хлыщутся', 2),
  masculinePast: Word('хлыстался', 5),
  femininePast: Word('хлысталась', 5),
  neuterPast: Word('хлысталось', 5),
  pluralPast: Word('хлыстались', 5),
  imperativeInformal: Word('хлыщись', 4),
  imperativeFormal: Word('хлыщитесь', 4),
  imperfect: [],
};

perfectVerbs.set(хлыстаться.name.text, хлыстаться);

export { хлыстаться };