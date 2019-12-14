import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замыкаться: PerfectVerb = {
  name: Word('замыкаться', 5),
  singular1stPerson: Word('замыкаюсь', 5),
  singular2ndPerson: Word('замыкаешься', 5),
  singular3rdPerson: Word('замыкается', 5),
  plural1stPerson: Word('замыкаемся', 5),
  plural2ndPerson: Word('замыкаетесь', 5),
  plural3rdPerson: Word('замыкаются', 5),
  masculinePast: Word('замыкался', 5),
  femininePast: Word('замыкалась', 5),
  neuterPast: Word('замыкалось', 5),
  pluralPast: Word('замыкались', 5),
  imperativeInformal: Word('замыкайся', 5),
  imperativeFormal: Word('замыкайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(замыкаться.name.text, замыкаться);

export { замыкаться };