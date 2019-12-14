import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попытаться: PerfectVerb = {
  name: Word('попытаться', 5),
  singular1stPerson: Word('попытаюсь', 5),
  singular2ndPerson: Word('попытаешься', 5),
  singular3rdPerson: Word('попытается', 5),
  plural1stPerson: Word('попытаемся', 5),
  plural2ndPerson: Word('попытаетесь', 5),
  plural3rdPerson: Word('попытаются', 5),
  masculinePast: Word('попытался', 5),
  femininePast: Word('попыталась', 5),
  neuterPast: Word('попыталось', 5),
  pluralPast: Word('попытались', 5),
  imperativeInformal: Word('попытайся', 5),
  imperativeFormal: Word('попытайтесь', 5),
  imperfect: ['пытаться'],
};

perfectVerbs.set(попытаться.name.text, попытаться);

export { попытаться };