import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограждаться: PerfectVerb = {
  name: Word('ограждаться', 6),
  singular1stPerson: Word('ограждаюсь', 6),
  singular2ndPerson: Word('ограждаешься', 6),
  singular3rdPerson: Word('ограждается', 6),
  plural1stPerson: Word('ограждаемся', 6),
  plural2ndPerson: Word('ограждаетесь', 6),
  plural3rdPerson: Word('ограждаются', 6),
  masculinePast: Word('ограждался', 6),
  femininePast: Word('ограждалась', 6),
  neuterPast: Word('ограждалось', 6),
  pluralPast: Word('ограждались', 6),
  imperativeInformal: Word('ограждайся', 6),
  imperativeFormal: Word('ограждайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(ограждаться.name.text, ограждаться);

export { ограждаться };