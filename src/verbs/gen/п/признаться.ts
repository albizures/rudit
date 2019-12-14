import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const признаться: PerfectVerb = {
  name: Word('признаться', 5),
  singular1stPerson: Word('признаюсь', 5),
  singular2ndPerson: Word('признаешься', 5),
  singular3rdPerson: Word('признается', 5),
  plural1stPerson: Word('признаемся', 5),
  plural2ndPerson: Word('признаетесь', 5),
  plural3rdPerson: Word('признаются', 5),
  masculinePast: Word('признался', 5),
  femininePast: Word('призналась', 5),
  neuterPast: Word('призналось', 5),
  pluralPast: Word('признались', 5),
  imperativeInformal: Word('признайся', 5),
  imperativeFormal: Word('признайтесь', 5),
  imperfect: ['признаваться'],
};

perfectVerbs.set(признаться.name.text, признаться);

export { признаться };