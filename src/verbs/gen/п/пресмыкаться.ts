import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресмыкаться: PerfectVerb = {
  name: Word('пресмыкаться', 7),
  singular1stPerson: Word('пресмыкаюсь', 7),
  singular2ndPerson: Word('пресмыкаешься', 7),
  singular3rdPerson: Word('пресмыкается', 7),
  plural1stPerson: Word('пресмыкаемся', 7),
  plural2ndPerson: Word('пресмыкаетесь', 7),
  plural3rdPerson: Word('пресмыкаются', 7),
  masculinePast: Word('пресмыкался', 7),
  femininePast: Word('пресмыкалась', 7),
  neuterPast: Word('пресмыкалось', 7),
  pluralPast: Word('пресмыкались', 7),
  imperativeInformal: Word('пресмыкайся', 7),
  imperativeFormal: Word('пресмыкайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(пресмыкаться.name.text, пресмыкаться);

export { пресмыкаться };