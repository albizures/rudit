import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убеждаться: PerfectVerb = {
  name: Word('убеждаться', 5),
  singular1stPerson: Word('убеждаюсь', 5),
  singular2ndPerson: Word('убеждаешься', 5),
  singular3rdPerson: Word('убеждается', 5),
  plural1stPerson: Word('убеждаемся', 5),
  plural2ndPerson: Word('убеждаетесь', 5),
  plural3rdPerson: Word('убеждаются', 5),
  masculinePast: Word('убеждался', 5),
  femininePast: Word('убеждалась', 5),
  neuterPast: Word('убеждалось', 5),
  pluralPast: Word('убеждались', 5),
  imperativeInformal: Word('убеждайся', 5),
  imperativeFormal: Word('убеждайтесь', 5),
  imperfect: ['убедиться'],
};

perfectVerbs.set(убеждаться.name.text, убеждаться);

export { убеждаться };