import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барахтаться: PerfectVerb = {
  name: Word('барахтаться', 3),
  singular1stPerson: Word('барахтаюсь', 3),
  singular2ndPerson: Word('барахтаешься', 3),
  singular3rdPerson: Word('барахтается', 3),
  plural1stPerson: Word('барахтаемся', 3),
  plural2ndPerson: Word('барахтаетесь', 3),
  plural3rdPerson: Word('барахтаются', 3),
  masculinePast: Word('барахтался', 3),
  femininePast: Word('барахталась', 3),
  neuterPast: Word('барахталось', 3),
  pluralPast: Word('барахтались', 3),
  imperativeInformal: Word('барахтайся', 3),
  imperativeFormal: Word('барахтайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(барахтаться.name.text, барахтаться);

export { барахтаться };