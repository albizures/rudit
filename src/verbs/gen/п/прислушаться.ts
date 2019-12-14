import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислушаться: PerfectVerb = {
  name: Word('прислушаться', 5),
  singular1stPerson: Word('прислушаюсь', 5),
  singular2ndPerson: Word('прислушаешься', 5),
  singular3rdPerson: Word('прислушается', 5),
  plural1stPerson: Word('прислушаемся', 5),
  plural2ndPerson: Word('прислушаетесь', 5),
  plural3rdPerson: Word('прислушаются', 5),
  masculinePast: Word('прислушался', 5),
  femininePast: Word('прислушалась', 5),
  neuterPast: Word('прислушалось', 5),
  pluralPast: Word('прислушались', 5),
  imperativeInformal: Word('прислушайся', 5),
  imperativeFormal: Word('прислушайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прислушаться.name.text, прислушаться);

export { прислушаться };