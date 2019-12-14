import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const принаряжаться: PerfectVerb = {
  name: Word('принаряжаться', 8),
  singular1stPerson: Word('принаряжаюсь', 8),
  singular2ndPerson: Word('принаряжаешься', 8),
  singular3rdPerson: Word('принаряжается', 8),
  plural1stPerson: Word('принаряжаемся', 8),
  plural2ndPerson: Word('принаряжаетесь', 8),
  plural3rdPerson: Word('принаряжаются', 8),
  masculinePast: Word('принаряжался', 8),
  femininePast: Word('принаряжалась', 8),
  neuterPast: Word('принаряжалось', 8),
  pluralPast: Word('принаряжались', 8),
  imperativeInformal: Word('принаряжайся', 8),
  imperativeFormal: Word('принаряжайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(принаряжаться.name.text, принаряжаться);

export { принаряжаться };