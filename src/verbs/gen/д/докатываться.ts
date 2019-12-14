import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докатываться: PerfectVerb = {
  name: Word('докатываться', 3),
  singular1stPerson: Word('докатываюсь', 3),
  singular2ndPerson: Word('докатываешься', 3),
  singular3rdPerson: Word('докатывается', 3),
  plural1stPerson: Word('докатываемся', 3),
  plural2ndPerson: Word('докатываетесь', 3),
  plural3rdPerson: Word('докатываются', 3),
  masculinePast: Word('докатывался', 3),
  femininePast: Word('докатывалась', 3),
  neuterPast: Word('докатывалось', 3),
  pluralPast: Word('докатывались', 3),
  imperativeInformal: Word('докатывайся', 3),
  imperativeFormal: Word('докатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(докатываться.name.text, докатываться);

export { докатываться };