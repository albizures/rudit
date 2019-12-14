import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нуждаться: PerfectVerb = {
  name: Word('нуждаться', 4),
  singular1stPerson: Word('нуждаюсь', 4),
  singular2ndPerson: Word('нуждаешься', 4),
  singular3rdPerson: Word('нуждается', 4),
  plural1stPerson: Word('нуждаемся', 4),
  plural2ndPerson: Word('нуждаетесь', 4),
  plural3rdPerson: Word('нуждаются', 4),
  masculinePast: Word('нуждался', 4),
  femininePast: Word('нуждалась', 4),
  neuterPast: Word('нуждалось', 4),
  pluralPast: Word('нуждались', 4),
  imperativeInformal: Word('нуждайся', 4),
  imperativeFormal: Word('нуждайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(нуждаться.name.text, нуждаться);

export { нуждаться };