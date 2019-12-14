import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const складываться: PerfectVerb = {
  name: Word('складываться', 3),
  singular1stPerson: Word('складываюсь', 3),
  singular2ndPerson: Word('складываешься', 3),
  singular3rdPerson: Word('складывается', 3),
  plural1stPerson: Word('складываемся', 3),
  plural2ndPerson: Word('складываетесь', 3),
  plural3rdPerson: Word('складываются', 3),
  masculinePast: Word('складывался', 3),
  femininePast: Word('складывалась', 3),
  neuterPast: Word('складывалось', 3),
  pluralPast: Word('складывались', 3),
  imperativeInformal: Word('складывайся', 3),
  imperativeFormal: Word('складывайтесь', 3),
  imperfect: ['сложиться'],
};

perfectVerbs.set(складываться.name.text, складываться);

export { складываться };