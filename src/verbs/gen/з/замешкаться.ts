import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замешкаться: PerfectVerb = {
  name: Word('замешкаться', 3),
  singular1stPerson: Word('замешкаюсь', 3),
  singular2ndPerson: Word('замешкаешься', 3),
  singular3rdPerson: Word('замешкается', 3),
  plural1stPerson: Word('замешкаемся', 3),
  plural2ndPerson: Word('замешкаетесь', 3),
  plural3rdPerson: Word('замешкаются', 3),
  masculinePast: Word('замешкался', 3),
  femininePast: Word('замешкалась', 3),
  neuterPast: Word('замешкалось', 3),
  pluralPast: Word('замешкались', 3),
  imperativeInformal: Word('замешкайся', 3),
  imperativeFormal: Word('замешкайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замешкаться.name.text, замешкаться);

export { замешкаться };