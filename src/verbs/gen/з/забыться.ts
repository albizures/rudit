import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забыться: PerfectVerb = {
  name: Word('забыться', 3),
  singular1stPerson: Word('забудусь', 3),
  singular2ndPerson: Word('забудешься', 3),
  singular3rdPerson: Word('забудется', 3),
  plural1stPerson: Word('забудемся', 3),
  plural2ndPerson: Word('забудетесь', 3),
  plural3rdPerson: Word('забудутся', 3),
  masculinePast: Word('забылся', 3),
  femininePast: Word('забылась', 3),
  neuterPast: Word('забылось', 3),
  pluralPast: Word('забылись', 3),
  imperativeInformal: Word('забудься', 3),
  imperativeFormal: Word('забудьтесь', 3),
  imperfect: ['забываться'],
};

perfectVerbs.set(забыться.name.text, забыться);

export { забыться };