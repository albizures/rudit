import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похвастаться: PerfectVerb = {
  name: Word('похвастаться', 4),
  singular1stPerson: Word('похвастаюсь', 4),
  singular2ndPerson: Word('похвастаешься', 4),
  singular3rdPerson: Word('похвастается', 4),
  plural1stPerson: Word('похвастаемся', 4),
  plural2ndPerson: Word('похвастаетесь', 4),
  plural3rdPerson: Word('похвастаются', 4),
  masculinePast: Word('похвастался', 4),
  femininePast: Word('похвасталась', 4),
  neuterPast: Word('похвасталось', 4),
  pluralPast: Word('похвастались', 4),
  imperativeInformal: Word('похвастайся', 4),
  imperativeFormal: Word('похвастайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(похвастаться.name.text, похвастаться);

export { похвастаться };