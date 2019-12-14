import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сморкаться: PerfectVerb = {
  name: Word('сморкаться', 5),
  singular1stPerson: Word('сморкаюсь', 5),
  singular2ndPerson: Word('сморкаешься', 5),
  singular3rdPerson: Word('сморкается', 5),
  plural1stPerson: Word('сморкаемся', 5),
  plural2ndPerson: Word('сморкаетесь', 5),
  plural3rdPerson: Word('сморкаются', 5),
  masculinePast: Word('сморкался', 5),
  femininePast: Word('сморкалась', 5),
  neuterPast: Word('сморкалось', 5),
  pluralPast: Word('сморкались', 5),
  imperativeInformal: Word('сморкайся', 5),
  imperativeFormal: Word('сморкайтесь', 5),
  imperfect: ['высморкаться','сморкнуться'],
};

perfectVerbs.set(сморкаться.name.text, сморкаться);

export { сморкаться };