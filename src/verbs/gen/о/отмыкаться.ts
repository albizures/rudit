import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмыкаться: PerfectVerb = {
  name: Word('отмыкаться', 5),
  singular1stPerson: Word('отмыкаюсь', 5),
  singular2ndPerson: Word('отмыкаешься', 5),
  singular3rdPerson: Word('отмыкается', 5),
  plural1stPerson: Word('отмыкаемся', 5),
  plural2ndPerson: Word('отмыкаетесь', 5),
  plural3rdPerson: Word('отмыкаются', 5),
  masculinePast: Word('отмыкался', 5),
  femininePast: Word('отмыкалась', 5),
  neuterPast: Word('отмыкалось', 5),
  pluralPast: Word('отмыкались', 5),
  imperativeInformal: Word('отмыкайся', 5),
  imperativeFormal: Word('отмыкайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отмыкаться.name.text, отмыкаться);

export { отмыкаться };