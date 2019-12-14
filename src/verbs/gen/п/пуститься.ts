import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пуститься: PerfectVerb = {
  name: Word('пуститься', 4),
  singular1stPerson: Word('пущусь', 3),
  singular2ndPerson: Word('пустишься', 1),
  singular3rdPerson: Word('пустится', 1),
  plural1stPerson: Word('пустимся', 1),
  plural2ndPerson: Word('пуститесь', 1),
  plural3rdPerson: Word('пустятся', 1),
  masculinePast: Word('пустился', 4),
  femininePast: Word('пустилась', 4),
  neuterPast: Word('пустилось', 4),
  pluralPast: Word('пустились', 4),
  imperativeInformal: Word('пустись', 4),
  imperativeFormal: Word('пуститесь', 4),
  imperfect: [],
};

perfectVerbs.set(пуститься.name.text, пуститься);

export { пуститься };