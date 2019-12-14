import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклюкаться: PerfectVerb = {
  name: Word('наклюкаться', 4),
  singular1stPerson: Word('наклюкаюсь', 4),
  singular2ndPerson: Word('наклюкаешься', 4),
  singular3rdPerson: Word('наклюкается', 4),
  plural1stPerson: Word('наклюкаемся', 4),
  plural2ndPerson: Word('наклюкаетесь', 4),
  plural3rdPerson: Word('наклюкаются', 4),
  masculinePast: Word('наклюкался', 4),
  femininePast: Word('наклюкалась', 4),
  neuterPast: Word('наклюкалось', 4),
  pluralPast: Word('наклюкались', 4),
  imperativeInformal: Word('наклюкайся', 4),
  imperativeFormal: Word('наклюкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наклюкаться.name.text, наклюкаться);

export { наклюкаться };