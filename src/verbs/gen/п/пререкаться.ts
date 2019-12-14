import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пререкаться: PerfectVerb = {
  name: Word('пререкаться', 6),
  singular1stPerson: Word('пререкаюсь', 6),
  singular2ndPerson: Word('пререкаешься', 6),
  singular3rdPerson: Word('пререкается', 6),
  plural1stPerson: Word('пререкаемся', 6),
  plural2ndPerson: Word('пререкаетесь', 6),
  plural3rdPerson: Word('пререкаются', 6),
  masculinePast: Word('пререкался', 6),
  femininePast: Word('пререкалась', 6),
  neuterPast: Word('пререкалось', 6),
  pluralPast: Word('пререкались', 6),
  imperativeInformal: Word('пререкайся', 6),
  imperativeFormal: Word('пререкайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пререкаться.name.text, пререкаться);

export { пререкаться };