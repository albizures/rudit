import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затыкаться: PerfectVerb = {
  name: Word('затыкаться', 5),
  singular1stPerson: Word('затыкаюсь', 5),
  singular2ndPerson: Word('затыкаешься', 5),
  singular3rdPerson: Word('затыкается', 5),
  plural1stPerson: Word('затыкаемся', 5),
  plural2ndPerson: Word('затыкаетесь', 5),
  plural3rdPerson: Word('затыкаются', 5),
  masculinePast: Word('затыкался', 5),
  femininePast: Word('затыкалась', 5),
  neuterPast: Word('затыкалось', 5),
  pluralPast: Word('затыкались', 5),
  imperativeInformal: Word('затыкайся', 5),
  imperativeFormal: Word('затыкайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(затыкаться.name.text, затыкаться);

export { затыкаться };