import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толкаться: PerfectVerb = {
  name: Word('толкаться', 4),
  singular1stPerson: Word('толкаюсь', 4),
  singular2ndPerson: Word('толкаешься', 4),
  singular3rdPerson: Word('толкается', 4),
  plural1stPerson: Word('толкаемся', 4),
  plural2ndPerson: Word('толкаетесь', 4),
  plural3rdPerson: Word('толкаются', 4),
  masculinePast: Word('толкался', 4),
  femininePast: Word('толкалась', 4),
  neuterPast: Word('толкалось', 4),
  pluralPast: Word('толкались', 4),
  imperativeInformal: Word('толкайся', 4),
  imperativeFormal: Word('толкайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(толкаться.name.text, толкаться);

export { толкаться };