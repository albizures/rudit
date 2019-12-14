import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размыкаться: PerfectVerb = {
  name: Word('размыкаться', 6),
  singular1stPerson: Word('размыкаюсь', 6),
  singular2ndPerson: Word('размыкаешься', 6),
  singular3rdPerson: Word('размыкается', 6),
  plural1stPerson: Word('размыкаемся', 6),
  plural2ndPerson: Word('размыкаетесь', 6),
  plural3rdPerson: Word('размыкаются', 6),
  masculinePast: Word('размыкался', 6),
  femininePast: Word('размыкалась', 6),
  neuterPast: Word('размыкалось', 6),
  pluralPast: Word('размыкались', 6),
  imperativeInformal: Word('размыкайся', 6),
  imperativeFormal: Word('размыкайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(размыкаться.name.text, размыкаться);

export { размыкаться };