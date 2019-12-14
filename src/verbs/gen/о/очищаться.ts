import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очищаться: PerfectVerb = {
  name: Word('очищаться', 4),
  singular1stPerson: Word('очищаюсь', 4),
  singular2ndPerson: Word('очищаешься', 4),
  singular3rdPerson: Word('очищается', 4),
  plural1stPerson: Word('очищаемся', 4),
  plural2ndPerson: Word('очищаетесь', 4),
  plural3rdPerson: Word('очищаются', 4),
  masculinePast: Word('очищался', 4),
  femininePast: Word('очищалась', 4),
  neuterPast: Word('очищалось', 4),
  pluralPast: Word('очищались', 4),
  imperativeInformal: Word('очищайся', 4),
  imperativeFormal: Word('очищайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(очищаться.name.text, очищаться);

export { очищаться };