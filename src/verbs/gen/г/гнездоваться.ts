import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнездоваться: PerfectVerb = {
  name: Word('гнездоваться', 7),
  singular1stPerson: Word('гнездуюсь', 5),
  singular2ndPerson: Word('гнездуешься', 5),
  singular3rdPerson: Word('гнездуется', 5),
  plural1stPerson: Word('гнездуемся', 5),
  plural2ndPerson: Word('гнездуетесь', 5),
  plural3rdPerson: Word('гнездуются', 5),
  masculinePast: Word('гнездовался', 7),
  femininePast: Word('гнездовалась', 7),
  neuterPast: Word('гнездовалось', 7),
  pluralPast: Word('гнездовались', 7),
  imperativeInformal: Word('гнездуйся', 5),
  imperativeFormal: Word('гнездуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(гнездоваться.name.text, гнездоваться);

export { гнездоваться };