import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намыкаться: PerfectVerb = {
  name: Word('намыкаться', 3),
  singular1stPerson: Word('намыкаюсь', 3),
  singular2ndPerson: Word('намыкаешься', 3),
  singular3rdPerson: Word('намыкается', 3),
  plural1stPerson: Word('намыкаемся', 3),
  plural2ndPerson: Word('намыкаетесь', 3),
  plural3rdPerson: Word('намыкаются', 3),
  masculinePast: Word('намыкался', 3),
  femininePast: Word('намыкалась', 3),
  neuterPast: Word('намыкалось', 3),
  pluralPast: Word('намыкались', 3),
  imperativeInformal: Word('намыкайся', 3),
  imperativeFormal: Word('намыкайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(намыкаться.name.text, намыкаться);

export { намыкаться };