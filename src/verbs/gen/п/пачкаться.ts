import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пачкаться: PerfectVerb = {
  name: Word('пачкаться', 1),
  singular1stPerson: Word('пачкаюсь', 1),
  singular2ndPerson: Word('пачкаешься', 1),
  singular3rdPerson: Word('пачкается', 1),
  plural1stPerson: Word('пачкаемся', 1),
  plural2ndPerson: Word('пачкаетесь', 1),
  plural3rdPerson: Word('пачкаются', 1),
  masculinePast: Word('пачкался', 1),
  femininePast: Word('пачкалась', 1),
  neuterPast: Word('пачкалось', 1),
  pluralPast: Word('пачкались', 1),
  imperativeInformal: Word('пачкайся', 1),
  imperativeFormal: Word('пачкайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(пачкаться.name.text, пачкаться);

export { пачкаться };